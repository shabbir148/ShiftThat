package com.demo.springjwt;

import com.demo.springjwt.controllers.ItemController;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class SpringBootSecurityJwtApplicationTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ItemController itemController;

    @Test
    public void contextLoads() throws Exception {
        assertThat(itemController).isNotNull();
    }

    @Test
    public void unauthorizedApiRequestsTest() throws Exception{
        mockMvc.perform(get("/getAllItems"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void testApiTest() throws Exception {
        mockMvc.perform(get("/api/test/all")).andExpect(status().isOk());
    }

    @Test
    public void userRegistrationTest() throws Exception {

        mockMvc.perform(post("/api/auth/signup")
                .contentType(APPLICATION_JSON_VALUE)
                .content("{\"username\":\"foo\", " +
                        "\"email\":\"foo@bar.com\", " +
                        "\"password\":\"12341234\"}"))
                .andExpect(status().isOk());

        mockMvc.perform(post("/api/auth/signup")
                .contentType(APPLICATION_JSON_VALUE)
                .content("{\"username\":\"foo\", " +
                        "\"email\":\"foo@bar.com\", " +
                        "\"password\":\"12341234\"}"))
                .andExpect(status().is4xxClientError());
    }

    @Test
    public void userLoginTest() throws  Exception {
        MvcResult mvcResult = mockMvc.perform(post("/api/auth/signin")
                .contentType(APPLICATION_JSON_VALUE)
                .content("{\"username\":\"foo\", " +
                        "\"password\":\"12341234\"}"))
                .andExpect(status().isOk())
                .andReturn();
    }
}
