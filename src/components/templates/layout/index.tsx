import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Header from 'components/organisms/header'
import Database from 'components/organisms/sidebar/database'
import Library from 'components/organisms/sidebar/library'
import Traning from 'components/organisms/sidebar/traning'
import Battle from 'components/organisms/sidebar/battle'
import styles from './layout.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header sitename={'タイトル（未定）'} />
      <Container maxWidth="lg" className={styles.main_contents}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={9}>
            <Paper className={styles.paper} square elevation={0}>
              <main>{children}</main>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={3}>
            <Paper className={styles.paper} square elevation={0}>
              <Library />
              <Traning />
              <Battle />
              <Database />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Layout