import Counter from './components/Counter';
import ProjectInfo from './components/ProjectInfo';
import Store from './components/Store';

export default function Home() {
  return (
    <main style={{ padding: '2em', fontFamily: 'Arial' }}>
      <h1>NextJS Homework 8 – Matthew Thomas</h1>
      <h2>React Components Demo</h2>
      <section style={{ display: 'flex', gap: '2em' }}>
        <Counter increment={1} color="green" />
        <Counter increment={2} color="purple" />
      </section>

      <ProjectInfo />
      <Store />
    </main>
  );
}