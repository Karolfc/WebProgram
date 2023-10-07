import './Button.css'
import { useApp } from '../../hooks/useApp'
export function Button ({ title }) {
  const { handleButton } = useApp()
  return (
    <section>
      <button
        onClick={handleButton}
      >
        <span>
          {title}
        </span>
      </button>
    </section>
  )
}
