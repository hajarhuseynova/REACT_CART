// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './Context'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: '20rem' }}></div>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
