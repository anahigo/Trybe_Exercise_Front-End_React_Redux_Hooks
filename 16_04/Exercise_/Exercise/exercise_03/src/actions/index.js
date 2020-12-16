import charAPI from '../services/charAPI';

export const characterSuccess = (character) => ({
  type: 'CHARACTER_SUCCESS',
  character
})

export const thunkCharacter = (name) => {
  return (dispatch) => {
    charAPI(name)
      .then((character) => dispatch(characterSuccess())) //atualizar o estado global
      .catch()
  }
}
