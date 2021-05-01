const Upload = () => {
    return (
        <section>
            <form>
                <label>Gallery Path</label>
                <input type=""></input>
                <label>Upload Images</label>
                <input 
                    type="file"
                    name="file-input"
                    accept="image/jpeg, image/png"
                    multiple="true"
                />
            </form>
        </section>
    )
}

export default Upload;