//Intslacion npm i --save-dev gulp gulp-sass sass gulp-sutoprefixer
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', () =>
  gulp.src('./src/scss/*.scss')//Ruta de donde busca archivos sass
    .pipe(sass({
      outputStyle: 'expanded',//nested(opcion por defecto),expandes,compact,compressed
      sourceComments: false//false(por defecto), true:comentario en css acerca del origen de la linea scss
    }))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./src/css'))//ruta donde se depositan los archivos
)

gulp.task('default', () => {
  gulp.watch('./src/scss/*.scss', gulp.series('sass'));
})
