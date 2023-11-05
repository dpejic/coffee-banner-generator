import { IPreviewCardHeaderProps } from './Header.types'

const PreviewCardHeader = ({ title }: IPreviewCardHeaderProps) => {
  return (
    <header
      style={{
        backgroundColor: '#424243',
        height: '47px',
        padding: '12px 0px 12px 25px',
        color: '#ffffff',
        fontWeight: '500',
        fontSize: '18px',
      }}
    >
      {title}
    </header>
  )
}

export { PreviewCardHeader }
