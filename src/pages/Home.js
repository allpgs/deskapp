import Header from '../components/Header'
import { Container, Typography, ButtonBase, Button } from '@material-ui/core'

export default function Home() {
    return (
        <>
        <Header/>
            <Container maxWidth="md">
                <div style={{textAlign: "center", marginTop: "5%", marginBottom: "5%"}} className="page">
                    <img src="/logo.png" width="auto" height="192px" alt="" />
                    <div style={{textAlign: "center", marginTop: "5%", marginBottom: "5%"}}>
                        <Typography variant="h3" component="h1" color="inherit" gutterBottom="true">
                            DeskApp
                        </Typography><br /><br />
                        <Typography variant="h5" component="p" color="inherit">
                            DeskApp은 웹앱 형태로만 개발된 여러 애플리케이션들을<br /><br />응용 프로그램으로 포팅하여 한결 편하게 사용하게 하는 프로젝트입니다.
                        </Typography>
                    </div>
                </div>
            </Container>
        </>
    )
}