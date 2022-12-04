import ButtonFilter from "../ButtonFilter/ButtonFilter";

const PlayerListOptions = () => {

    return(
        <section className="py-48 bg-black flex-col items-center justify-around">
            <h1 className="text-2xl text-center">Listados de inscriptos:</h1>
            <div className="flex flex-wrap items-center justify-center">
                <ButtonFilter value="1ra" />
                <ButtonFilter value="2da" />
                <ButtonFilter value="3ra" />
                <ButtonFilter value="4ta" />
            </div>
        </section>
    );
};
export default PlayerListOptions