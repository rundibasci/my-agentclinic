import styles from './main-layout.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/">
        AgentClinic
      </a>
      <nav className={styles.nav} aria-label="Primary">
        <a href="/">Home</a>
      </nav>
    </header>
  )
}

function Main({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className={styles.main}>{children}</main>
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Spec-driven care for recovering AI agents.</span>
    </footer>
  )
}

export function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.shell}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}
