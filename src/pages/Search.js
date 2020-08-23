import React, { useReducer, useEffect, useState } from 'react';
import { 
	InputGroup, 
	ListGroup, 
	ListGroupItem, 
	Button, 
	Modal, 
	ModalHeader, 
	ModalBody, 
	ModalFooter, 
	Label,
	FormGroup, 
	Input 
 	} from 'reactstrap';

import { API, graphqlOperation } from '@aws-amplify/api'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faSave, faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field } from 'formik';
import { Submit} from 'formstrap';
import { Auth } from "@aws-amplify/auth";
import { createPost, createTranslationVote, createTranslation } from '../graphql/mutations';
import { listPosts, listTranslations } from '../graphql/queries';
import { onCreateTranslation, onCreatePost, onCreateTranslationVote } from '../graphql/subscriptions';


type TranslationVote = {
	vote: string;
}

type Translation = {
	translationIvie: string;
	translationSound: string;
	exampleIvie: string;
	exampleEnglish: string;

}

type Post = {
	postContent: string;
};

type AppState = {
	posts: Post[];
	translations: Translation[];
	formData: {};
	selectedPost: Post;
	selectedTranslation: Translation;
};

type Action =
	| {
      type: 'QUERY_POST';
      payload: Post[];
    }
  | {
      type: 'QUERY_TRANSLATION';
      payload: Translation[];
    }
  | {
      type: 'SUBSCRIPTION';
      payload: Post;
    }
  | {
      type: 'SET_FORM_DATA';
      payload: {};
    }
  | {
      type: 'SELECT_POST';
      payload: {};
    }	
  | {
      type: 'SELECT_TRANSLATION';
      payload: {};
    };

type SubscriptionEvent<D> = {
	value: {
		data: D;
	};
};

const initialState: AppState = {
	posts: [],
	translations: [],
	selectedPost: {
		postContent: '',
	},
	selectedTranslation: {
		translationIvie: '',
		exampleIvie: '',
		exampleEnglish: '',
	},
	formData: {
		postContent: '',
		translationIvie: '',
		exampleIvie: '',
		exampleEnglish: '',
	},
};

const reducer = (state: AppState, action: Action) => {
	switch (action.type) {
		case 'QUERY_POST':
			return { ...state, posts: action.payload };
		case 'QUERY_TRANSLATION':
			return { ...state, translations: action.payload };	  
		case 'SUBSCRIPTION':
			return { ...state, posts: [...state.posts, action.payload] };
		case 'SET_FORM_DATA':
			return { ...state, formData: action.payload };
		case 'SELECT_POST':
			return { ...state, selectedPost: action.payload };  
		case 'SELECT_TRANSLATION':
			return { ...state, selectedTranslation: action.payload };      
		default: 
			return state;
	}
};

const Search = () => {
	
	const [modal, setModal] = useState(false);
	const [modal1, setModal1] = useState(false);
	const [modal2, setModal2] = useState(false);
	const toggle = () => setModal(!modal);
	const toggle1 = () => setModal1(!modal1);
	const toggle2 = () => setModal2(!modal2); 
	const [authorId, setAuthorId] = useState(null);
	const [state, dispatch] = useReducer(reducer, initialState);
	
	const userDetails = async () =>  {
		let user = await Auth.currentAuthenticatedUser();
		setAuthorId(user.username);
	};		
	
	async function createNewTranslation(values, postId) {
		const translation = {
			authorId : authorId,
			translationIvie: values.translationIvie.toLowerCase(),
			exampleIvie: values.exampleIvie,
			exampleEnglish: values.exampleEnglish,
			postId: postId,
		};
		
		await API.graphql(graphqlOperation(createTranslation, { input: translation }));
	}
	
	const createNewPost = async (values) => {
		const post = {
			postContent: values.postContent.toLowerCase(),
			authorId : authorId,
		};
		console.log(post);
		let post2 = await API.graphql(graphqlOperation(createPost, { input: post }));
		const postId = post2.data.createPost.id;
		createNewTranslation(values, postId);
	};

	useEffect(() => {
		userDetails();
		getPostList();

		const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
			next: (eventData: SubscriptionEvent<{ onCreatePost: Post }>) => {
				const payload = eventData.value.data.onCreatePost;
				dispatch({ type: 'SUBSCRIPTION', payload });
			},
		});

		return () => subscription.unsubscribe();
	}, []);

	const getPostList = async () => {
		const posts = await API.graphql(graphqlOperation(listPosts));
		dispatch({
			type: 'QUERY_POST',
			payload: posts.data.listPosts.items,
		});
	};  

	async function handleSelectPost(post) {		
		const postId = post.id;
		const translations = await API.graphql(graphqlOperation(listTranslations, {
			filter: {
				postId: {
					eq: postId
					}
				}
			}
		));
		dispatch({
			type: 'QUERY_TRANSLATION',
			payload: translations.data.listTranslations.items,
		});
		dispatch({
			type: 'SELECT_POST',
			payload: post,
		});
		setModal(true);
	}
	


	return (
		<div className="d-flex flex-column justify-content-flex-start" >
			<div style={{marginTop: 120, marginBottom: 70, paddingLeft: 10, paddingRight: 10}}>
				<ListGroup flush>
					{
						state.posts.map((item, index) =>(
							<ListGroupItem key={index} tag="button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} action onClick={() => handleSelectPost(item)}  >
								<div style={{ display: 'flex', width: '90%', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
									{item.postContent}
								</div>
								<div>
									<FontAwesomeIcon size="sm" icon= {faPlayCircle} color='blue' />
								</div>
							</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
			<div style={{position: 'fixed', top: 60, width: '100%', paddingTop: 15, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, background:'white'  }}>
				<InputGroup>
					<Input 
						placeholder="🔍 Search..." 
					/>
				</InputGroup>
			</div>
			<div className='fab' style={{position: 'fixed', bottom: 120, right: 20, height: 40, width: 40, backgroundColor: 'blue', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
				<div>
					<Button color="link" onClick={toggle2} > 
						<FontAwesomeIcon size="lg" icon= {faPlus}  />
					</Button>
				</div>
			</div>
			<Modal isOpen={modal} scrollable={true} size='lg' >
				<ModalHeader>{state.selectedPost.postContent}</ModalHeader>
				<ModalBody>
				<div>
					{
						state.translations.map((item, index) =>(
							<div key={index} style={{
								flex: 1,
								paddingHorizontal: 0,
								paddingTop: 0,
								borderRadius: 10,
								margin: 15,
								marginBottom: 0,
								paddingBottom: 0,
								borderTopWidth: 6,
								borderTopColor: "#8d38e8",
								borderBottomWidth: 1,
								borderBottomColor: "#8d38e8", 
							}} >	
								<div style={{
									flexDirection: 'row',
									paddingHorizontal: 10,
									alignItems: 'center',
									paddingVertical: 10,
									justifyContent: 'space-between',
								}}>
									{item.translationIvie}
								</div>								
								<div className='content'>
									{item.exampleIvie}
								</div>								
								<div className='content'>
									{item.exampleEnglish}
								</div>						
							</div>
						))
					}
				</div>				
					<Modal isOpen={modal1} size='lg'>
						<ModalHeader>Add new translation for {state.selectedPost.postContent}:</ModalHeader>
						<ModalBody>
							<Formik
							  initialValues={{ 
								translationIvie: '',
								exampleIvie: '',
								exampleEnglish: '',
							 }}
							 onSubmit={values => createNewTranslation(values)}
						   >
							 {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
								<Form>
									<FormGroup>
										<Label>Ivie Translation</Label>
										<br/>
										<Field
											name='translationIvie'
											onChange={handleChange('translationIvie')}
											onBlur={handleBlur('translationIvie')}
											value={values.translationIvie}
											style={{marginBottom: 10}}
										/>
									</FormGroup>
									<FormGroup>
										<Label>Ivie Example Sentence</Label>
										<br/>
										<Field
											name='exampleIvie'
											onChange={handleChange('exampleIvie')}
											onBlur={handleBlur('exampleIvie')}
											value={values.exampleIvie}
											style={{marginBottom: 10}}
										/>
									</FormGroup>
									<FormGroup>
										<Label>English Translation of Example Sentence</Label>
										<br/>
										<Field
											name='exampleEnglish'
											onChange={handleChange('exampleEnglish')}
											onBlur={handleBlur('exampleEnglish')}
											value={values.exampleEnglish}
											style={{marginBottom: 10}}
										/>
									</FormGroup>
									<Submit withSpinner><FontAwesomeIcon size="sm" icon= {faSave}  />  Save</Submit>{'    '}
									<Button color="secondary" onClick={toggle1}><FontAwesomeIcon size="sm" icon= {faTimes}  /> Close</Button>
							   </Form>
							 )}
							</Formik>
						</ModalBody>
					</Modal> 
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle1}>Add New Translation</Button>{' '}
					<Button color="secondary" onClick={toggle}>Back</Button>					
				</ModalFooter>
			</Modal>
			<Modal isOpen={modal2} size='lg'>
				<ModalHeader>Add new word</ModalHeader>
				<ModalBody>
					<Formik
					  initialValues={{ 
						postContent: '',
						translationIvie: '',
						exampleIvie: '',
						exampleEnglish: '',
					 }}
					 onSubmit={values => createNewPost(values)}
				   >
					 {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
						<Form>
							<FormGroup>
								<Label>English Word/Phrase</Label>
								<br/>
								<Field
									name='postContent'
									onChange={handleChange('postContent')}
									onBlur={handleBlur('postContent')}
									value={values.postContent}
									style={{marginBottom: 10}}
								/>
							</FormGroup>	
							<FormGroup>
								<Label>Ivie Translation</Label>
								<br/>
								<Field
									name='translationIvie'
									onChange={handleChange('translationIvie')}
									onBlur={handleBlur('translationIvie')}
									value={values.translationIvie}
									style={{marginBottom: 10}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Ivie Example Sentence</Label>
								<br/>
								<Field
									name='exampleIvie'
									onChange={handleChange('exampleIvie')}
									onBlur={handleBlur('exampleIvie')}
									value={values.exampleIvie}
									style={{marginBottom: 10}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>English Translation of Example Sentence</Label>
								<br/>
								<Field
									name='exampleEnglish'
									onChange={handleChange('exampleEnglish')}
									onBlur={handleBlur('exampleEnglish')}
									value={values.exampleEnglish}
									style={{marginBottom: 10}}
								/>
							</FormGroup>
							<Submit withSpinner><FontAwesomeIcon size="sm" icon= {faSave}  />  Save</Submit>{'    '}
							<Button color="secondary" onClick={toggle2}><FontAwesomeIcon size="sm" icon= {faTimes}  /> Close</Button>
					   </Form>
					 )}
					</Formik>
				</ModalBody>
			</Modal> 
		</div>
	);
};
export default Search;