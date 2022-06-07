# appimage

The `build.js` script:

* copies over `bin`, `index.js`, and `node` into the `template` dir
* downloads `appimagetool`
* builds an appimage

## gotchas

If your source is a tarball unpack it into the root dir for the appimage you want to create.

Right now there is a hardcoded (local) path in `template/AppRun` (the entry point of the appimage) to the entry point of the "app" we are embedding within it.

## sources
* https://www.booleanworld.com/creating-linux-apps-run-anywhere-appimage/
* https://docs.appimage.org/packaging-guide/manual.html#ref-manual
