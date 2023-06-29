terraform {
  required_providers {
    grafana = {
      source = "grafana/grafana"
      version = "1.42.0"
    }
  }
}

provider "grafana" {
  url  = "http://localhost:3000/"
  auth = "glsa_O5BpplZKa60Mhzi2wKlV5ZLLvX9PWGVK_ba81b7d1"
}