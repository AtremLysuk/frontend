import {useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
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
      if (e.key === 'Escape') onClose()
    }

    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusableElements?.length) return
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

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modal__close}
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h2
          id="delete-modal-title"
          className={styles.modal__title}
        >
          Вы уверены, что хотите удалить этот приход?
        </h2>

        <div className={styles.modal__product}>
          <span
            className={styles['modal__product-dot']}
            aria-hidden="true"
          />
          <div className={styles['modal__product-img']}>
            <img
              src="/images/monitor.png"
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

        <footer className={styles.modal__footer}>
          <button
            className={styles.modal__cancel}
            onClick={onClose}
          >
            ОТМЕНИТЬ
          </button>
          <button
            className={styles.modal__confirm}
            onClick={onConfirm}
            ref={(button) => {
              if (button) setTimeout(() => button.focus(), 100)
            }}
          >
            <FaTrashAlt aria-hidden="true" color='red'/>
            УДАЛИТЬ
          </button>
        </footer>
      </div>
    </div>,
    document.body
  )
}

export default DeleteModal