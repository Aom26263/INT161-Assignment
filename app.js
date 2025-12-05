import createError from 'http-errors';
import express from 'express';
import subjectRouter from './routes/subject-route.js';
import courseRouter from './routes/course-route.js'
import courseStudentRouter from './routes/courseStudent-route.js'

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/a-044/api', subjectRouter);
app.use('/a-044/api', courseRouter);
app.use('/a-044/api', courseStudentRouter);



app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;