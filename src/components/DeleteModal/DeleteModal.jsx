
import {useEffect, useRef} from 'react'
import styles from './DeleteModal.module.scss'
import {FaTrashAlt} from "react-icons/fa"

const DeleteModal = ({order, onConfirm, onClose}) => {
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)
  useEffect(() => {
    if (!order) return
    previousActiveElement.current = document.activeElement
    document.body.style.overflow = 'hidden'
    modalRef.current?.focus()
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    const handleTab = (e) => {
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        if (focusableElements?.length) {
          const firstElement = focusableElements[0]
          const lastElement = focusableElements[focusableElements.length - 1]
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('keydown', handleTab)
    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('keydown', handleTab)
      previousActiveElement.current?.focus()
    }
  }, [order, onClose])
  if (!order) return null
  return (<>
      <div
        className={styles['overlay']}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className={styles['modal']}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        tabIndex={-1}
      >
        <button
          className={styles['modal__close']}
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h2
          id="delete-modal-title"
          className={styles['modal__title']}
        >
          Вы уверены, что хотите удалить этот приход?
        </h2>

        <div className={styles['modal__product']}>
          <span
            className={styles['modal__product-dot']}
            aria-hidden="true"
          >•</span>
          <div className={styles['modal__product-img']}>
            <img
              src="/images/monitor-placeholder.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className={styles['modal__product-info']}>
            <span className={styles['modal__product-name']}>
              {order.name}
            </span>
            <span className={styles['modal__product-sn']}>
              SN-{order.id}.{String(order.id).padStart(7, '0')}
            </span>
          </div>
        </div>

        <footer className={styles['modal__footer']}>
          <button
            className={styles['modal__cancel']}
            onClick={onClose}
          >
            ОТМЕНИТЬ
          </button>
          <button
            className={styles['modal__confirm']}
            onClick={onConfirm}
            ref={(button) => {
              if (button) setTimeout(() => button.focus(), 100)
            }}
          >
            <FaTrashAlt aria-hidden="true" />
            УДАЛИТЬ
          </button>
        </footer>
      </div>
    </>)
}
export default DeleteModal