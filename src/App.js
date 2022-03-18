// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Class';
import Functional from './components/Functional';
import State from './components/State';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import PostList from './components/PostList'
import PostForm from './components/PostForm'


// React Hooks
import ClassCounter from './hooks/ClassCounter';
import HookCounter from './hooks/HookCounter';
import HookCounterThree from './hooks/HookCounterThree';
import HookCounterFour from './hooks/HookCounterFour';
import HookCounterOne from './hooks/HookCounterOne';
import ClassCounterOne from './hooks/ClassCounterOne';


// simpli learn
import Main from './SimpliLearn/Main';




function App() {
	return (
		<div className="App">

			{/* SimpliLearn */}
			<Main />




			
			{/* React Hooks */}
			{/* <HookCounterOne />
			<ClassCounterOne></ClassCounterOne> */}


			{/* <HookCounterFour /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounter /> */}
			{/* <ClassCounter /> */}



			
			 {/* // React */}
			<div className='top-50'>
				<PostForm />
				<PostList />
			</div>

			<div className='top-50'>
				<RefsDemo></RefsDemo>
				<ParentComp></ParentComp>
				<FragmentDemo />
				<Table />
			</div>

			<div className='top-50 lifecycle-hook'>
				<LifecycleA />
			</div>
			
			<div className='top-50'>
				<Form />
				<Inline />
				<Stylesheet primary={true} />
			</div>


			<div className='top-50'>
				<NameList />
				<UserGreeting />
				{/* Parent and Child component interaction */}
				<ParentComponent/>

				{/* Functional component */}
				<Functional name="Bruce" heroName='Batman'>
					{/* <p>This is Children props!</p> */}
				</Functional>
				{/* <Functional name="Clark" heroName='Superman'>
					<button>Action</button>
				</Functional>
				<Functional name="Diana" heroName='Wonder Woman'/> */}

				{/* class component */}
				<Welcome name="Bruce" heroName='Batman'>
					<p>This is Children props!</p>
				</Welcome>
				{/* <Welcome name="Clark" heroName='Superman'/>
				<Welcome name="Diana" heroName='Wonder Woman'/> */}

				{/* For State*/}
				<State />
			</div>



		</div>
	);
}

export default App;
