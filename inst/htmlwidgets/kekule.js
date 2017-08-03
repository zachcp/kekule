HTMLWidgets.widget({

  name: 'kekule',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        el.innerText = x.message;

    // sketcher-id is defined in the widget def
    var sketchnode = document.getElementById(el.id)
    var sketcher   = new Kekule.ChemWidget.Editor.Composer(sketchnode);
    var mol        = widg.getChemObj().standardize();
    var writer     = Kekule.IO.ChemDataWriterManager.getWriterByFormat("smi", null, mol);
    var data       = writer.writeData(mol, "text", "smi");
    data


      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
