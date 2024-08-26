function App() {
    return(
    <div className='outer'>
<h1 className='head'>Quick Start</h1>
<p className='head'>Welcome to the React docmentation!This page will give you an introduce to the 80% of React concepts that you will use on a daily basis.</p>
 <ul className='inner'><h3 style={{fontSize: '20px', marginBottom: '5px', marginLeft: '-20px'}} >You will learn</h3>
    <li>How ot create and nest components</li>
    <li>How to add markup and styles</li>
    <li>How to display data</li>
    <li>How to render conditions and lists</li>
    <li>How to response to events and update the screen</li>
    <li>How to share data between components</li>
 </ul>
    </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)
