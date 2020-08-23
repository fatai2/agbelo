import React,  { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { Formik } from 'formik';
import { DataStore, Predicates } from "@aws-amplify/datastore";
import {   User,
  Post,
  Translation,
  TranslationVote,
  VoteType } from "./models";;

import './detailedTwitt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowAltCircleDown, faShare, faBookmark, faPlusCircle, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

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

function onCreateTranslation(values) {
  DataStore.save(
    new Post(values)
  );
}

const initialState = {};

export const DetailedTwitt = (props: Props) => {
  
  const [visible, setVisible] = React.useState(false);
  const [formState, setFormState] = useState(initialState);
  const [translations, setTranslations] = useState(props.translation);
  
  useEffect(() => {
    fetchTranslations()
  }, [])  
 
  async function fetchTranslations() {
    try {
      const translationData = await API.graphql(graphqlOperation(listTranslationsByPostId, {
        postId: props.id
      }
      ))
      const translations = translationData.data.listTranslationsByPostId.items
      setTranslations(translations)
    } catch (err) { console.log('error fetching translations') }
  }

  async function addTranslation(values) {
    try {
      setFormState({ ...formState, values })
      const translation = { ...formState }
      setTranslations([...translations, translation])      
      onCreateTranslation(translations)
	  setFormState(initialState)
    } catch (err) {
      console.log('error creating translation:', err)
    }
  }
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <div className="container">
      <div className="titleContainer">
        <div>
          <div>{props.postContent}</div>
        </div>
        <div
          onClick={() => {}}
        >
            <div>
              <div> 🔊</div>
            </div>
        </div>
      </div>
        <div>
          <div>
            {
              translations.map((i, id) =>(
                <div 
                  key={id}
                  className="container1"
                >
                  <div className="topRow">                      
                    <div>
                      <div>{i.translationIvie}</div>
                    </div>
                    <div className="container2">
                      <div
                        onClick={() => {}}
                        
                      >
                        <div>
                          <div> 🔊 </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => {}}
                      
                    >      
                      <div className="content">
                        {i.exampleIvie} 🔊
                      </div>
                    </div>
                    <div
                      onClick={() => {}}
                      
                    > 
                      <div className="content">
                        {i.exampleEnglish} 🔊
                      </div>
                    </div>
                    <div
                        onClick={() => {}}
                        
                      >
                      <div className="iconContainer">
                        <FontAwesomeIcon 
							icon="user-circle"
							size={20}
							color={iconColor}
                        />
                        <div className="iconDescription">
                          {i.author}
                        </div>
                      </div>
                    </div>
                  </div>      
                <div className="bottomRow">
                  <div
                    onClick={() => {}}
                    
                  >
                    <div className="iconContainer">
                      <FontAwesomeIcon                        
						icon="arrow-alt-circle-up"
                        size={24}
                        color={iconColor}
                      />
                      <div className="iconDescription">
                        {i.voteCount}
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {}}
                    
                  >
                    <div className="iconContainer">
                      <FontAwesomeIcon                        
						icon="share"
                        size={24}
                        color={iconColor}
                      />
                      <div className="iconDescription">
                        Share
                      </div>
                    </div>
                  </div>        
                  <div
                    onClick={() => {}}
                    
                  >
                    <div className="iconContainer">
                      <FontAwesomeIcon                        
						icon="bookmark"
                        size={24}
                        color={iconColor}
                      />
                      <div className="iconDescription">
                        Save
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {}}
                    
                  >
                    <div className="iconContainer">
                      <FontAwesomeIcon                        
						icon="arrow-alt-circle-down"
                        size={24}
                        color={iconColor}
                      />
                    </div>
                  </div>
                </div>  
              </div>
              )).sort((a, b) => a.voteCount > b.voteCount)
          }
        </div>  
      </div> 
        <Modal>
			<ModalHeader>Add New Ivie Translation For: {props.postContent}</ModalHeader>
			<ModalBody>            
               <Formik
                  initialValues={{ 
                    translationIvie: '',
                    exampleIvie: '',
                    exampleEnglish: '',
                    voteCount: 0,
                    postId: props.id,
                    authorId: props.authorId
                 }}
                 onSubmit={values => addTranslation(values)}
               >
                 {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                   <div>
                     <Input
                       onChangeText={handleChange('postContent')}
                       onBlur={handleBlur('postContent')}
                       value={values.postContent}
                       label="English Word/Phrase"
                     />
                     <Input
                       onChangeText={handleChange('translationIvie')}
                       onBlur={handleBlur('translationIvie')}
                       value={values.translationIvie}
                       label='Ivie Translation'
                     />
                     <Input
                       onChangeText={handleChange('exampleIvie')}
                       onBlur={handleBlur('exampleIvie')}
                       value={values.exampleIvie}
                       label='Ivie Example Sentence'
                     />
                     <Input
                       onChangeText={handleChange('exampleEnglish')}
                       onBlur={handleBlur('exampleEnglish')}
                       value={values.exampleEnglish}
                       label='English Translation of Example Sentence '
                     />                     
                   </div>
                 )}
               </Formik>
			</ModalBody>
			<ModalFooter>
				<div className="topRow">
				  <Button
					color="outline"
					onClick={hideModal}
				  >
					<FontAwesomeIcon                        
						icon="times"
						size={24}
						color="blue"
					/>
					Cancel
				  </Button> 
				  <Button
					color="outline"
					onClick={handleSubmit}
					disabled={isSubmitting}
				  >
					<FontAwesomeIcon                        
						icon="check"
						size={24}
						color="blue"
					/>
					Submit
				  </Button> 
				</div>
			</ModalFooter>			
        </Modal>
        <Button
			style={{
				position: 'absolute',
				bottom: 65,
				right: 16,
			}}
			color="link"
			onClick={showModal} >
				<FontAwesomeIcon                        
					icon="plus-circle"
					size={24}
					color="blue"
				/>
		</Button>
    </div>
  );
};

