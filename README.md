# Backend-Robust-Server-Structure-Advanced-Tips

Robust server structure: Advanced tips
Instructions
Your task is to extend this API server, which stores "Notes" to enhance the error reporting functionality and add a read-only ratings resource.

Existing files
Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

Tasks
You should modify this server to meet the following requirements:

/notes/:noteId/ratings returns all ratings for the note.
/notes/:noteId/ratings/:ratingId returns the rating for the note with the specified rating ID, or 404 if the rating ID isn't associated with the note ID.
/ratings returns all ratings.
/ratings/:ratingId returns the rating the specified ID.
Remove duplicate code by passing data on the response where appropriate.
Return 405 and an error message for all the HTTP methods that aren't handled by the router.
