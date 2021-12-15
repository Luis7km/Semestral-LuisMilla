package app;

import java.util.ArrayList;
import java.util.List;

public class Recomendaciones {
    String reco;
    String cargo;
    String descripcion;


    public void setRecomendador(String _reco){
        reco = _reco;
    }

    public String getRecomendador(){
        return reco;
    }

    public void setCargo(String _cargo){
        cargo = _cargo;
    }

    public String getCargo(){
        return cargo;
    }

    public void setDescripcion(String _descripcion){
        descripcion = _descripcion;
    }

    public String getDescripcion(){
        return descripcion;
    }
}