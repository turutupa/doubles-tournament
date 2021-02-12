const path = require('path');
const gulp = require('gulp');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const alias = require('gulp-ts-alias');
const project = typescript.createProject('tsconfig.json');
const { src, dest } = gulp;

gulp.task('build', build);

function build() {
  const compiled = src('./src/**/*.ts')
    .pipe(alias({ configuration: project.config }))
    .pipe(sourcemaps.init())
    .pipe(project());

  return compiled.js
    .pipe(
      sourcemaps.write({
        sourceRoot: (file) => {
          return path.relative(path.join(file.cwd, file.path), file.base);
        },
      }),
    )
    .pipe(dest('lib/'));
}
