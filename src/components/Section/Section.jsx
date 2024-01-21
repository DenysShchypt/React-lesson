import css from './Section.module.css';
export const Section = ({ title = false, children }) => {
  return (
    <section className={css.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
