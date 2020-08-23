import React, { useState, useEffect } from 'react';
import { 
	InputGroup, 
	InputGroupAddon, 
	InputGroupText, 
	Input, 
	ListGroup, 
	ListGroupItem, 
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter, 
	Label,
	Form,
	FormGroup  } from 'reactstrap';

import { Formik } from 'formik';
import { DataStore, Predicates } from "@aws-amplify/datastore";
import {   User,
  Post,
  Translation,
  TranslationVote,
  VoteType } from "./models";

type Props = {
  id: string;
  postContent: string;
  author: string;
  translation: Array<{
    id: string;
    translationIvie: string;
    exampleIvie: string;
    exampleEnglish: string;
    authorId: string;
    voteCount: number;
  }>;
};

function onCreatePost(values) {
  DataStore.save(
    new Post(values)
  );
}

async function listPosts(setPosts) {
  const posts = await DataStore.query(Post, Predicates.ALL);
  setPosts(posts);
}


export const Feed = (props: Props) => {
	
		const [posts, setPosts] = useState([]);

		useEffect( () => {
			
			listPosts(setPosts);

			const subscription = DataStore.observe(Post).subscribe(msg => {
			  console.log(msg.model, msg.opType, msg.element);
			  listPosts(setPosts);
			});

			const handleConnectionChange = () => {
			  const condition = navigator.onLine ? 'online' : 'offline';
			  console.log(condition);
			  if (condition === 'online') { listPosts(setPosts); }
			}
			
			window.addEventListener('online', handleConnectionChange);
			window.addEventListener('offline', handleConnectionChange);
			   
			return () => subscription.unsubscribe();
		}, []);

  
	return (
		<div>
			<InputGroup>
				<Input 
					placeholder="Search..." 
					onChangeText={setQuery}
					value={query}
				/>
				<InputGroupAddon addonType="append">
					<InputGroupText>🔍</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<ListGroup flush>
			{
				filteredData.map((item, index) =>(
					<ListGroupItem key={item.id} tag="button" action onClick={() => {}} >
						{item.postContent}
					</ListGroupItem>
				))
			}
			</ListGroup>
		</div>
	);
};
