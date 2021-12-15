package app;

import java.util.ArrayList;
import java.util.List;

public class GroupExperiencias {
    // EXPERIENCIA

    List<Experiencia> experiencia = new ArrayList<Experiencia>();

    public void addExperiencia(Experiencia _experiencia) {
        experiencia.add(_experiencia);
    }

    public List<Experiencia> getGroup() {
        return experiencia;
    }

    public int getCount0(){
        return experiencia.size();
    }
}