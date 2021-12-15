package app;

import static spark.Spark.before;
import static spark.Spark.get;
import static spark.Spark.options;
import static spark.Spark.post;

import java.util.List;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

import org.apache.log4j.Logger;
import org.apache.log4j.BasicConfigurator;

public class ApplicationMain {
  static Logger logger = Logger.getLogger(ApplicationMain.class);

  public static void main(String[] args) {
    BasicConfigurator.configure();
    GroupExperiencias group = new GroupExperiencias();
    GroupConocimientos group1 = new GroupConocimientos();
    GroupRecomendaciones group2 = new GroupRecomendaciones();
    // Enable CORS
    enableCors();

    // Experiencia
    post("/experiencia", (req, res) -> {
      res.type("application/json");
      JSONObject body = new JSONObject(req.body());
      Experiencia experiencia = new Experiencia();
      if(!body.has("titulo")){
          return "Invalid request";
      }
      experiencia.setTitulo(body.getString("titulo"));
      experiencia.setLugar(body.getString("lugar"));
      experiencia.setFecha(body.getString("fecha"));
      experiencia.setDescripcion(body.getString("descripcion"));
      experiencia.setExp1(body.getString("exp1"));
      experiencia.setExp2(body.getString("exp2"));

      group.addExperiencia(experiencia);
      JSONObject jo = new JSONObject(group);
      return jo;
    });

    get("/experiencia", (req, res) -> {
      res.type("application/json");
      JSONObject jo = new JSONObject(group);
      return jo;
    });

    // Conocimientos
    post("/conocimiento", (req, res) -> {
      res.type("application/json");
      JSONObject body = new JSONObject(req.body());
      Conocimientos conocimiento = new Conocimientos();
      if(!body.has("cono")){
          return "Invalid request";
      }
      conocimiento.setCono1(body.getString("cono"));

      group1.addConocimiento(conocimiento);
      JSONObject jo = new JSONObject(group1);
      return jo;
    });

    get("/conocimiento", (req, res) -> {
      res.type("application/json");
      JSONObject jo = new JSONObject(group1);
      return jo;
    });

    // Recomendaciones
    post("/recomendacion", (req, res) -> {
      res.type("application/json");
      JSONObject body = new JSONObject(req.body());
      Recomendaciones recomendacion = new Recomendaciones();
      if(!body.has("Reco")){
        return "Invalid request";
      }
      recomendacion.setRecomendador(body.getString("Reco"));
      recomendacion.setCargo(body.getString("Cargo"));
      recomendacion.setDescripcion(body.getString("Descripcion"));

      group2.addRecomendacion(recomendacion);
      JSONObject jo = new JSONObject(group2);
      return jo;
    });

    get("/recomendacion", (req, res) -> {
      res.type("application/json");
      JSONObject jo = new JSONObject(group2);
      return jo;
    });
  }

  

  public static void enableCors() {
    options("/*", (request, response) -> {

      String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
      if (accessControlRequestHeaders != null) {
        response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
      }

      String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
      if (accessControlRequestMethod != null) {
        response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
      }

      return "OK";
    });

    before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
  }
}