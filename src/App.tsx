import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Страницы грузим лениво — как на лекции 27.10 про code splitting.
const HomePage = lazy(() => import('./pages/HomePage'))
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'))
const ReviewBookingPage = lazy(() => import('./pages/ReviewBookingPage'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
const SuccessPage = lazy(() => import('./pages/SuccessPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// При переходе между страницами возвращаемся наверх, иначе новая страница открывается «в середине»
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="container page">Loading…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/review-booking" element={<ReviewBookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
