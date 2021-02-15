const gulp = require('gulp');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const alias = require('gulp-ts-alias');
const merge = require('merge2');

const project = typescript.createProject('tsconfig.json');
const { src } = gulp;

gulp.task('build', build);

function build() {
  const tsResult = src('./src/**/*.ts')
    .pipe(alias({ configuration: project.config }))
    .pipe(sourcemaps.init())
    .pipe(project());

  return merge([
    tsResult.dts.pipe(gulp.dest('lib/types')),
    tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest('lib')),
  ]);
}
