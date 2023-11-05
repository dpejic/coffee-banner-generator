import classNames from 'classnames'

import { IModalProps } from './Modal.types'

import { Icon, IconVariant } from '~atoms'

const Modal = ({ openModal, onClose, children, className }: IModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] bg-gray-400 bg-opacity-30" onClick={onClose}>
      <dialog
        className="absolute z-[101] bg-white m-auto left-0 right-0 top-0 bottom-0 max-w-[90%] w-max max-h-[80vh] rounded-lg"
        onClick={(e) => {
          e.stopPropagation()
        }}
        open={openModal}
      >
        <div className={classNames('relative max-w-[100%] w-full', className)}>
          <div className="absolute right-5 top-4 cursor-pointer" onClick={onClose}>
            <Icon variant={IconVariant.close} fill={'none'} />
          </div>
          <div className="py-10 px-10">{children}</div>
        </div>
      </dialog>
    </div>
  )
}

export { Modal }
