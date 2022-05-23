import {Grid, Table } from '@material-ui/core'
import { Header } from './header'
import { Content } from './content'
import {useStyle} from '../add-person/hooks/use-style'

export const PersonsTable = () => <Grid className={useStyle().scroll}>
    <Table stickyHeader headeColor={'red'}>
        <Header />
        <Content />
    </Table>
  </Grid>
