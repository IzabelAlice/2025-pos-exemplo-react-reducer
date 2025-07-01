
const PageTarefasEditar = async ({ params }: { params: { id: string } }) => {
  const { id }  = await params;
  return (
    <>
      <h1>Aplicativo exemplo de hook reducer</h1>
      <h2>Editar a tarefa {id}</h2>
    </>
  );
};

export default PageTarefasEditar;