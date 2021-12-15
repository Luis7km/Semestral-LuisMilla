package app;

import java.util.ArrayList;
import java.util.List;

public class GroupRecomendaciones{
    // RECOMENDACIONES

    List<Recomendaciones> recomendaciones = new ArrayList<Recomendaciones>();

    public void addRecomendacion(Recomendaciones _recomendacion) {
        recomendaciones.add(_recomendacion);
    }

    public List<Recomendaciones> getGroup2() {
        return recomendaciones;
    }

    public int getCount2(){
        return recomendaciones.size();
    }
}