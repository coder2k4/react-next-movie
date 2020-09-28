import Modal from "./modal";
import {createMovie} from "../actions";
import React from "react";
import MovieCreateHtmlForm from "./movieCreateForm";
import {useRouter} from "next/router";


const SideMenu = (props) => {
  const { categories } = props
  const router = useRouter()
  let modal = null

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal()
      router.push('/')
    })
  }

    return (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateHtmlForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map(c =>
                    <a
                        onClick={() => props.changeCategory(c.name)}
                        key={c.id}
                        className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a>
                )
                }
            </div>
        </div>
    )
}

export default SideMenu
