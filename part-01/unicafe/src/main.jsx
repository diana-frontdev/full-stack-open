import ReactDOM from 'react-dom/client'

import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

//region part-01 c: page re-rendering
let counter = 1

ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
)
//endregion