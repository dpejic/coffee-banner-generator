import { IPreviewCardMainProps } from './Main.types'
import { Ingredient } from '../Ingredient'

import { BannerWidthType, FlexDirection } from '~enums'

const PreviewCardMain = ({ description, image, ingredients, widthType, width }: IPreviewCardMainProps) => {
  let flexDirection: FlexDirection.ROW | FlexDirection.COLUMN_REVERSE
  if (widthType === BannerWidthType.LARGE || !width) {
    flexDirection = FlexDirection.ROW
  } else {
    flexDirection = width < 300 ? FlexDirection.COLUMN_REVERSE : FlexDirection.ROW
  }

  return (
    <main
      style={{
        padding: '25px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: flexDirection,
        }}
      >
        <p
          style={{
            color: '#424243',
            fontSize: '13.7px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '19.571px',
            wordBreak: 'break-all',
          }}
        >
          {description}
        </p>
        <img
          src={image}
          alt="Coffee Image"
          style={{
            width: '95px',
            height: '145px',
            objectFit: 'cover',
            paddingLeft: flexDirection === FlexDirection.COLUMN_REVERSE ? '0' : '5px',
            marginLeft: flexDirection === FlexDirection.COLUMN_REVERSE ? 'unset' : 'auto',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '23px',
        }}
      >
        {ingredients.map((ingredient) => (
          <Ingredient key={ingredient} text={ingredient} />
        ))}
      </div>
    </main>
  )
}

export { PreviewCardMain }
