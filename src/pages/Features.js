import Header from '../components/Header'
import Feature from '../components/Feature.js'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Container, Typography } from '@material-ui/core'

const featurej = [
    {
        'id': 1,
        'sites': 'https://time.navyism.com/',
        'alt': 'https://time.navyism.com/',
        'name': 'Navyism',
        'links': 'https://placeimg.com/48/48/3',
        'github': 'deskapp-pj/navyism'
    },
    {
        'id': 2,
        'sites': 'https://www.dbdbschool.kr/',
        'alt': 'https://www.dbdbschool.kr/',
        'name': 'dbdbschool',
        'links': 'https://placeimg.com/48/48/3',
        'github': 'deskapp-pj/dbdbschool'
    },
    {
        'id': 3,
        'sites': 'https://www.ealimi.com/Promotion',
        'alt': 'https://www.ealimi.com/',
        'name': '이알리미',
        'links': 'https://placeimg.com/48/48/3',
        'github': 'deskapp-pj/ealimi',
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
                        return <Feature key={c.id} id={c.id} name={c.name} alt={c.alt} sites={c.sites} links={c.links} github={c.github} />
                    })}
                </TableBody>
            </Table>
        </Paper>
        </div>
        </>
    )
}

export default Features;
