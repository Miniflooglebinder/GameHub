function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
      <div className="w-full bg-red-500 lg:col-span-2">Nav</div>
      <div className="hidden lg:block bg-amber-400">Aside</div>
      <div className="bg-blue-500">Main</div>
    </div>
  );
}

export default App;
