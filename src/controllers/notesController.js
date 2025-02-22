
const {createNoteAsync, getAllNotesAsync, getNoteByIdAsync, deleteNoteByIdAsync, updateNoteAsync} = require('../services/notesService');

const createNote = async (req,res) =>{
    try{

        const {title,content,authorId} = req.body;
        const newTodo =await createNoteAsync(title,content,authorId);
        res.status(201).json(newTodo);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

const getAllNotes = async (req,res) =>{
    try{
        const notes = await getAllNotesAsync();
        res.status(200).json(notes);
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

const getNoteById = async (req,res) =>{
    try{
        const {id} = req.params.id || req.query.id;
        const note = await getNoteByIdAsync(id);
        if(note){
            res.status(200).json(note);
        }
        else{
            res.status(404).json({message: "Note not found"});
        }
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

const deleteNote = async (req,res) =>{
    try{
        const {id} = req.params;
        const deleted = await deleteNoteByIdAsync(id);
        if(deleted){
            res.status(204).send();
        }
        else{
            res.status(404).json({message: "Note not found"});
        }
    }
    catch(error){
        console.error(`Error: ${error.message}`);
        res.status(500).json({message: "Server Error"});
    }
}

const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFields = req.body; 

        const updatedNote = await updateNoteAsync(id, updatedFields);

        if (updatedNote) {
            res.status(200).json(updatedNote);
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    deleteNote,
    updateNote
};