import { ModalStyle } from "./style"
import Container from "./Conteiner"
import { useState, useEffect } from "react"

const Modal = () => {

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => setModalVisible(true), [])

    return (
        <ModalStyle>
            { modalVisible && <Container onClose={ () => setModalVisible(false) } />}
        </ModalStyle>
    )
}

export default Modal
