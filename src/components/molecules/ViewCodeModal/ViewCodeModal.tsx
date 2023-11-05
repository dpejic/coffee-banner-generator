import { IViewCodeModalProps } from './ViewCodeModal.types'

import {
  Button,
  ButtonComponentVariant,
  ButtonVariant,
  Icon,
  IconVariant,
  Input,
  InputVariant,
  Modal,
  Typography,
  TypographyVariant,
  TypographyWeight,
} from '~atoms'
import { FontSize, IconPosition } from '~enums'
import { copyToClipboard } from '~utils'

const ViewCodeModal = ({ openModal, onClose }: IViewCodeModalProps) => {
  const codeBlockValue = document.querySelector('#code-block')!.outerHTML

  const copyCode = async () => {
    await copyToClipboard(codeBlockValue)
  }

  return (
    <Modal openModal={openModal} onClose={onClose} className="w-full sm:w-[950px]">
      <div className="text-center">
        <Typography
          variant={TypographyVariant.p}
          text="That&#39;s it! All done!"
          fontSize={FontSize.largexl}
          weight={TypographyWeight.semiBold}
        />
        <Typography
          variant={TypographyVariant.p}
          text="Simply copy the code below, and paste it into your website!"
          fontSize={FontSize.normal}
          className="text-custom-gray-300 mt-6"
          weight={TypographyWeight.normal}
        />
        <Input
          wrapperClassName="flex items-center space-x-2 w-full"
          className="text-custom-gray-300 w-full pt-2 !min-h-[562px] !h-full mt-5"
          variant={InputVariant.textarea}
          value={codeBlockValue}
          name="code-text"
          cols={4}
          readOnly
          id="code-text"
        />
        <Button
          variant={ButtonVariant.button}
          text="Copy to clipboard"
          weight={TypographyWeight.semiBold}
          icon={<Icon variant={IconVariant.copy} fill={'none'} />}
          iconPosition={IconPosition.LEFT}
          componentVariant={ButtonComponentVariant.primary}
          className="mt-7 ml-auto"
          onClick={copyCode}
        />
      </div>
    </Modal>
  )
}

export { ViewCodeModal }
