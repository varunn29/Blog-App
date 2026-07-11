import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { PostsProvider } from './Context/PostsContext.tsx'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
   <PostsProvider>
      <App/>
   </PostsProvider>
</BrowserRouter>)
