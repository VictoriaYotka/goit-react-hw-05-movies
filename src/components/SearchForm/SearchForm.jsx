import css from './SearchForm.module.css'

const SearchForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input name="movie" type="text" autoFocus placeholder="Movie title" className={css.input}/>
        <button type="submit" className={css.button}>Search</button>
    </form>
  )
}

export default SearchForm