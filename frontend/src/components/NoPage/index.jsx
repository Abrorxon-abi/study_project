import styles from './styles.scss'
import notFoundImg from '../../assets/imgs/notFound.png'
import brandsImg from '../../assets/imgs/brands.png'

const NoPage = () => {

    const btnStyle = { "width": '100px', 'height': '40px' }

    return (
        <div style={styles}>
            <div className='no-page'>
                <div>
                    <h1>404</h1>
                    <p>Home. Pages. <span className='not-found-text'>404 not found</span></p>
                </div>
                <img src={notFoundImg} alt="" width={700} height={500} />
                <a className='btn btn-danger' style={btnStyle} href="/">Go back</a>
                <img src={brandsImg} alt="" className='brands-img' />
            </div>
        </div>
    )
};

export default NoPage;