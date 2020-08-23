import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { 
	Button, 
 } from 'reactstrap';
import { AmplifySignOut } from '@aws-amplify/ui-react';
	
const Profile = (props) => {

	return (
		<div style={{marginTop: 70, marginBottom: 70}}>
		  Profile
		  <div>
			<AmplifySignOut />
		  </div>
			<div className='fab d-lg-none' style={{position: 'fixed', bottom: 120, right: 20, height: 40, width: 40, backgroundColor: 'blue', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
				<div>
					<Button color="link" > 
						<FontAwesomeIcon size="lg" icon= {faShareAlt}  />
					</Button>
				</div>
			</div>
		</div>
	  )
};
export default Profile;