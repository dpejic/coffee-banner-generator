import { IIngredientProps } from './Ingredient.types'

const Ingredient = ({ text }: IIngredientProps) => {
  return (
    <span
      style={{
        backgroundColor: 'rgba(17, 160, 219, 0.30)',
        borderRadius: '8px',
        padding: '5px 18px',
        width: 'max-content',
        color: '#424243',
        fontSize: '13.7px',
        fontWeight: '400',
        lineHeight: '19.571px',
      }}
    >
      {text}
    </span>
  )
}

export { Ingredient }
