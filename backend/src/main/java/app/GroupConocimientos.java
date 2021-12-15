package app;

import java.util.ArrayList;
import java.util.List;

public class GroupConocimientos{
    // CONOMIENTOS

    List<Conocimientos> conocimiento = new ArrayList<Conocimientos>();

    public void addConocimiento(Conocimientos _conocimiento) {
        conocimiento.add(_conocimiento);
    }

    public List<Conocimientos> getGroup1() {
        return conocimiento;
    }

    public int getCount1(){
        return conocimiento.size();
    }
}