export const HeaderBackground = () => {
  return (
    <div>
      <section
        className="h-16 bg-cover"
        style={{ backgroundImage: "url('/main-background.jpg')" }}
      >
        <div className="w-full h-full bg-slate-900/50"></div>
      </section>
    </div>
  );
};
