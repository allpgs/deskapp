import Header from '../components/Header'
import Feature from '../components/Feature.js'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Container, Typography } from '@material-ui/core'

const featurej = [
    {
        'id': 1,
        'sites': 'https://time.navyism.com/',
        'alt': 'https://time.navyism.com/',
        'name': 'Navyism',
        'image': "https://raw.githubusercontent.com/deskapp-pj/navyism/master/logo.png",
        'github': 'deskapp-pj/navyism'
    },
    {
        'id': 2,
        'sites': 'https://www.dbdbschool.kr/',
        'alt': 'https://www.dbdbschool.kr/',
        'name': 'dbdbschool',
        'image': 'https://raw.githubusercontent.com/deskapp-pj/dbdbschool/master/logo.png',
        'github': 'deskapp-pj/dbdbschool'
    },
    {
        'id': 3,
        'sites': 'https://www.ealimi.com/Promotion',
        'alt': 'https://www.ealimi.com/',
        'name': 'e알리미',
        'image': 'https://raw.githubusercontent.com/deskapp-pj/ealimi/master/logo.png',
        'github': 'deskapp-pj/ealimi',
    },
    {
        'id': 4,
        'sites': 'https://www.sparxmaths.uk/',
        'alt': 'https://www.sparxmaths.uk/',
        'name': 'Sparx Maths',
        'image': 'https://raw.githubusercontent.com/deskapp-pj/sparxmaths/master/assets/icons/logo.png',
        'github': 'deskapp-pj/sparxmaths',
    },
    {
        'id': 5,
        'sites': 'https://www.drfrostmaths.com/index.php',
        'alt': 'https://www.drfrostmaths.com/',
        'name': 'DrFrostMaths.com',
        'image': 'https://raw.githubusercontent.com/deskapp-pj/drfrostmaths/master/assets/icons/logo.png',
        'github': 'deskapp-pj/drfrostmaths',
    }
]

function Features() {
    return (
        <>
        <Header/>
        <Container maxWidth="md">
            <div style={{textAlign: "center", marginTop: "5%", marginBottom: "5%"}} className="page">
                <Typography variant="h5" component="p" color="inherit">Features</Typography>
            </div>
        </Container>
        <div style={{paddingLeft: "3%", paddingRight: "3%", paddingTop: "10px", paddingBottom: "10px"}} className="page">
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>&nbsp;</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>사이트</TableCell>
                        <TableCell>다운로드</TableCell>
                        <TableCell>GitHub</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {featurej.map(c => {
                        return <Feature key={c.id} id={c.id} name={c.name} alt={c.alt} sites={c.sites} image={c.image} github={c.github} />
                    })}
                </TableBody>
            </Table>
        </Paper>
        </div>
        </>
    )
}

export default Features;
