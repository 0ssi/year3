import * as firebase from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, getDoc, query, orderBy, limit} from 'firebase/firestore'
import { browserPopupRedirectResolver, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import {initializeApp} from 'firebase/app'
import path from "path";


  const firebaseConfig = {
    apiKey: "AIzaSyAradBYHfd9c2dMpUx02Da7ZkZhmmeZg5E",
    authDomain: "chat-app-57b79.firebaseapp.com",
    projectId: "chat-app-57b79",
    storageBucket: "chat-app-57b79.appspot.com",
    messagingSenderId: "902581373391",
    appId: "1:902581373391:web:9e025306357ba95ed0aaba",
    measurementId: "G-M7RCF10DZZ"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const firestore = getFirestore();

  const db = getFirestore();

function MyApp() {

  const [user] = useAuthState(auth)

  return (
    <div className='App'>
      <header>

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}

      </section>
    </div>
  )
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider, browserPopupRedirectResolver)
  }


  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut}>Sign Out</button>
  )
}


function ChatRoom() {


  const messagesRef = collection(db,"messages")


  const q = query(messagesRef, limit(1000))

  const [messages] = useCollectionData(q)

console.log(messages)

  return(
    <div>
      
      {messages && messages.map(msg => <ChatMessage  message={msg}/>)}
      <SignOut />
    </div>

  )
}


function ChatMessage(props) {
  const { message} = props.message;

  return <p>{message}</p>
}

export default MyApp
