import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contacto</h1>
        <form action="https://formspree.io/f/mjkgejqo" method="post">
            <div className='formGroup'>
                <label htmlFor="name"></label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="email"></label>
                <input 
                    type="text" 
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message"></label>
                <textarea 
                    name="message"
                    id="message"
                    placeholder="Mensaje"
                    required
                ></textarea>
            </div>
            <input className='hover btn' type="submit" value="Enviar" />
        </form>
    </section>
  )
}

export default Contact