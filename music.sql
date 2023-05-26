--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: artist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.artist (
    artist_name character varying(100) NOT NULL,
    package_name character varying(100) NOT NULL,
    image_url character varying(200),
    release_date date NOT NULL,
    sample_url character varying(200),
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    price character varying(30)
);


ALTER TABLE public.artist OWNER TO postgres;

--
-- Data for Name: artist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.artist (artist_name, package_name, image_url, release_date, sample_url, id, price) FROM stdin;
Suliana	Bohoso Moto	image_1685087627223.jpg	2019-01-21	music\\song_1685087626934.mp3	ba8343e3-c83c-4c11-8946-d3b02ad9e650	\N
Suliana Test	Test	image_1685093198824.jpeg	2019-01-21	music\\song_1685093198770.mp3	28125c6f-c9e8-49ac-821d-85b99962164e	320K
\.


--
-- Name: artist artist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.artist
    ADD CONSTRAINT artist_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

